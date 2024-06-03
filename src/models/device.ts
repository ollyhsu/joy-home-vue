import mongoose, { Schema, Document } from 'mongoose';

interface IDevice extends Document {
    roomId: mongoose.Types.ObjectId;
    name: string;
    type: string;
    brand: string;
    icon?: string;
    status: 'online' | 'offline';
    location: string;
    createdAt: Date;
}

const deviceSchema: Schema = new Schema({
    roomId: { type: mongoose.Types.ObjectId, ref: 'Room', required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    brand: { type: String, required: true },
    icon: { type: String },
    status: { type: String, enum: ['online', 'offline'], default: 'offline' },
    location: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Device = mongoose.model<IDevice>('Device', deviceSchema);

export default Device;
