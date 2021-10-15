import swell from "swell-js";

const options = {
    useCamelCase: true,
};

export const swellInstance = swell.init(
    process.env.NEXT_PUBLIC_SWELL_CLIENT_ID,
    process.env.NEXT_PUBLIC_SWELL_SECRET_KEY,
    options,
);
