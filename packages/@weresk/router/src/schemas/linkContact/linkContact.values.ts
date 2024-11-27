export const CONTACT_TYPES = [
    "website",
    "email",
    "phone",
    "facebook",
    "instagram",
    "twitter",
    "x",
    "linkedin"
] as const;
export type ContactType = (typeof CONTACT_TYPES)[number];

export const contactTypeInitialValue = "email";
export const contactTypeList = [
    { title: "Email", value: "email" },
    { title: "Phone", value: "phone" },
    { title: "Website", value: "website" },
    { title: "Facebook", value: "facebook" },
    { title: "Instagram", value: "instagram" },
    { title: "X", value: "x" },
    { title: "Twitter", value: "twitter" },
    { title: "Linkedin", value: "linkedin" }
];
