import "reflect-metadata"
import { DataSource } from "typeorm"
import { Candidate } from "../entity/candidate.entity"
import { Vote } from "../entity/vote.entity"
import configs from "../configs"

const AppDataSource = new DataSource({
    ...configs.mysql as any,
    synchronize: true,
    entities: [Candidate, Vote],
    migrations: [],
    subscribers: [],
})

export default AppDataSource;