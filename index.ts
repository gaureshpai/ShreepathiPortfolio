'use server'
const { connect, disconnect, getSkills, getAbout, getEducation, getCerts } = require('./db');

export default async function run() {
    try {
        await connect();

        const skills = await getSkills();
        console.log('Skills:', skills);

        const about = await getAbout();
        console.log('About:', about);

        const education = await getEducation();
        console.log('Education:', education);

        const certs = await getCerts();
        console.log('Certs:', certs);

    } finally {
        await disconnect();
    }
}

run().catch(console.error);
