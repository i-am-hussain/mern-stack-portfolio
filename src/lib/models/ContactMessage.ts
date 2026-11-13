import { Schema, model, models, type Model } from "mongoose";

export type ContactMessageDocument = {
  name: string;
  email: string;
  subject?: string;
  message: string;
  ip?: string;
  userAgent?: string;
  emailSent: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const ContactMessageSchema = new Schema<ContactMessageDocument>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 160,
    },
    subject: {
      type: String,
      trim: true,
      maxlength: 120,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 5000,
    },
    ip: { type: String, maxlength: 64 },
    userAgent: { type: String, maxlength: 300 },
    emailSent: { type: Boolean, default: false },
  },
  { timestamps: true },
);

ContactMessageSchema.index({ createdAt: -1 });

const ContactMessage: Model<ContactMessageDocument> =
  (models.ContactMessage as Model<ContactMessageDocument>) ||
  model<ContactMessageDocument>("ContactMessage", ContactMessageSchema);

export default ContactMessage;
