import { CreateDateColumn } from 'typeorm'

export class SharedProp {
    @CreateDateColumn({
        default: () => 'CURRENT_TIMESTAMP',
        type: 'date',
        name: 'created_at'
    })
    createdAt: Date

    @CreateDateColumn({
        default: () => 'CURRENT_TIMESTAMP',
        type: 'date',
        name: 'updated_at'
    })
    updatedAt: Date
}
