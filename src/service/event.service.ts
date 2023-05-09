import Event from '../schema/event.schema'

export const isEventNameAndAddressAvailable = async (event_name: string, event_address: string) =>  {
    const checkName = await Event.findOne({ where: { event_name: event_name } })
    const checkAddress = await Event.findOne({ where: { event_address: event_address } })
    if (checkName || checkAddress) {
        return false
    } else {
        return true
    }
}