import env from "@/app/env";

import { Client, Databases, Storage, Users, Avatars } from "node-appwrite";

let client = new Client();

client
    .setEndpoint(env.appwrite.endpoint) 
    .setProject(env.appwrite.projectId) 
    .setKey(env.appwrite.apikey);

export { client, Databases, Storage, Users, Avatars };
