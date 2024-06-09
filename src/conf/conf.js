

import process from 'process';

export const configuration = {
    appwriteUrl: String(process.env.REACT_APP_APPWRITE_URL),
    appwriteProjectId: String(process.env.REACT_APP_APPWRITE_PROJECT_ID),
    appwriteProjectDbId: String(process.env.REACT_APP_APPWRITE_PROJECT_DATABASE_ID),
    appwriteProjectCollectionId: String(process.env.REACT_APP_APPWRITE_PROJECT_COLLECTION_ID),
    appwriteProjectBucketId: String(process.env.REACT_APP_APPWRITE_PROJECT_BUCKET_ID),
};

