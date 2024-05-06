import bcrypt from 'bcrypt';

const SALT_ROUNDS: number = 10

export const hashPassword = async(password: string): Promise<string> => {
  return await bcrypt.hash(password, SALT_ROUNDS)

}

//Leer y comparar con el Hash de la DB
export const comparePassword = async(password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash)
}

