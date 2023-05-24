import { validateOrReject } from 'class-validator'

export const validateClassObj = async (input: object, message: string): Promise<void> => {
  try {
    await validateOrReject(input, {
      validationError: { target: false, value: false }
    })
  } catch (error) {
    throw new Error(message)
  }
}