import { Injectable } from "@nestjs/common";
import { UserDTO } from "./user.dto";
import { UserEntity } from "./user.entity";


// Esta clase convierte de Dto - Entity & Viceversa.
@Injectable()
export class UserMapper {

    dtoToEntity(userDTO: UserDTO): UserEntity {
        return new UserEntity(userDTO.id, userDTO.name);
    }

    entityToDto(userEntity: UserEntity): UserDTO {
        return new UserDTO(userEntity.userId, userEntity.name);
    }

}
