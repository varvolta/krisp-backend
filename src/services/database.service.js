import mongoose from 'mongoose'
import databaseConfig from '../configs/database.config.js'

const connectDatabase = async () => {
    await mongoose.connect(databaseConfig.mongo.uri)
}

export default connectDatabase