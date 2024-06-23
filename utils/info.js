'use server';

import { connect } from './database';

const GET = async () => {
    try {
        await connect();

        const infos = await Cert.find();

        return JSON.parse(JSON.stringify(infos));
    } catch (error) {
        console.error("Error in connecting to the database:", error);
        return null;
    }
}

export default GET;