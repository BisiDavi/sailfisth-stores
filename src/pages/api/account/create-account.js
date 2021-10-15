import swell from "swell-node";

export default async function handler(req, res) {
    swell.init(
        process.env.NEXT_PUBLIC_SWELL_CLIENT_ID,
        process.env.NEXT_PUBLIC_SWELL_SECRET_KEY,
    );

		switch (req.method) {
        case "POST": {
            await swell.post("/account",req.query);
        }
        case "GET": {
        }
        default:
            return res.status(400);
    }
}
