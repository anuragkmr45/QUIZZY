export const sectionPlaceholder = {
    label: "Select Section",
    value: null,
    // color: Colors.text,
};

export type sectionOptionsType = {
    label: string;
    value: string;
}

export const sectionOptions: sectionOptionsType[] = Array.from({ length: 40 }, (_, index) => ({
    label: (index + 1).toString(),
    value: (index + 1).toString(),
}));