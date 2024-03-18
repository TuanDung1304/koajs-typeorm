import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { SharedProp } from './sharedProp.entity'

export type UserType = 'admin' | 'user'

@Entity({ name: 'users' })
export class UsersEntity extends SharedProp {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: 'first_name' })
    firstName: string

    @Column({ name: 'last_name' })
    lastName: string

    @Column({ name: 'birth_of_date', type: 'date', nullable: true })
    birthOfDate: Date

    @Column({ unique: true })
    email: string

    @Column({ default: 'user' })
    type: UserType

    @Column()
    password: string

    @Column()
    salt: string

    accessToken?: string
}
