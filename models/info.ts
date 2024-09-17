const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGODB_URL);

export async function getSkills() {
    try {
        const database = client.db('info');
        const collection = database.collection('skills');
        const skills = await collection.find({});

        return JSON.stringify(skills) || [];
    } catch (error) {
        console.error("Error fetching skills:", error);
        return null;
    }
}

export async function getAbout() {
    try {
        const database = client.db('info');
        const collection = database.collection('about');
        const about = await collection.find({});

        return JSON.stringify(about) || [];
    } catch (error) {
        console.error("Error fetching about:", error);
        return null;
    }
}

export async function getEducation() {
    try {
        const database = client.db('info');
        const collection = database.collection('education');
        const education = await collection.find({});

        return JSON.stringify(education) || [];
    } catch (error) {
        console.error("Error fetching education:", error);
        return null;
    }
}

export async function getCerts() {
    try {
        const database = client.db('info');
        const collection = database.collection('certs');
        const certs = await collection.find({});

        return JSON.stringify(certs) || [];
    } catch (error) {
        console.error("Error fetching certs:", error);
        return null;
    }
}
