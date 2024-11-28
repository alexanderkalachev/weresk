export const CONTACT_TYPES = [
    "website",
    "email",
    "phone",
    "facebook",
    "instagram",
    "x",
    "linkedin",
    "vk",
    "whatsapp"
] as const;
export type ContactType = (typeof CONTACT_TYPES)[number];

export const contactTypeInitialValue = "email";
export const contactTypeList = [
    { title: "Email", value: "email" },
    { title: "Phone", value: "phone" },
    { title: "Website", value: "website" },
    { title: "Facebook", value: "facebook" },
    { title: "Instagram", value: "instagram" },
    { title: "X (Twitter)", value: "x" },
    { title: "Linkedin", value: "linkedin" },
    { title: "VK", value: "vk" },
    { title: "Whatsapp", value: "whatsapp" }
];
