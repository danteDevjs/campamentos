import { DataSource } from "typeorm";
import { UserEntity } from "./entities/user.entity";
import { AdministradorEntity } from "./entities/administrador.entity";
import { DetalleAlimentacionEntity, EmpresaEntity, ProyectoEntity } from "./entities/global.entity";
import { AlimentacionEntity } from "./entities/servicios/alimentacion.entity";

export const dataSource = new DataSource({
    type: 'mysql', 
    host: 'dbd_campamentos', 
    username: 'root', 
    password: 'dante569', 
    port: 3306, 
    database: 'campamentos', 
    synchronize: true, 
    logging: false, 
    entities: [UserEntity, AdministradorEntity, ProyectoEntity, EmpresaEntity,  DetalleAlimentacionEntity, AlimentacionEntity],
});

export default dataSource;