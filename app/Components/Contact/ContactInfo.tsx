"use client";
import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: "terd@zentariph.com",
    href: "mailto:terd@zentariph.com",
    hoverColor: "group-hover:bg-blue-600",
  },
  {
    icon: Phone,
    label: "Text / Call",
    value: "+63 960 250 6993",
    href: "tel:+639602506993",
    hoverColor: "group-hover:bg-blue-600",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "Zentari Facebook",
    href: "https://www.facebook.com/zentarisoftware",
    hoverColor: "group-hover:bg-blue-600",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@zentari",
    href: "https://www.instagram.com/zentarisoftware/",
    hoverColor: "group-hover:bg-pink-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Zentari Inc.",
    href: "#",
    hoverColor: "group-hover:bg-blue-700",
  },
];

const ContactInfo = () => {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-6">
          Direct Channels
        </h3>
        <ul className="space-y-6">
          {contactDetails.map((contact) => (
            <li key={contact.label}>
              <a
                href={contact.href}
                className="group flex items-start gap-4 hover:opacity-75 transition-opacity"
              >
                <div
                  className={`w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 ${contact.hoverColor} group-hover:text-white transition-colors`}
                >
                  <contact.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-slate-900 font-medium">
                    {contact.label}
                  </span>
                  <span className="block text-slate-500 text-sm">
                    {contact.value}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-10 border-t border-slate-100">
        <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-6">
          Global HQ
        </h3>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-slate-900 font-medium mb-1">
              Manila, Philippines
            </span>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              We are a remote-first team serving clients across North America,
              Europe, and Asia-Pacific.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
