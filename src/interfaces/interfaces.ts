
export interface IAffiliates {
    name: string,
    address: string
    phoneNumber: string
    nearestAvailableTime: Date
    closestTime: Date
}

export interface ISpecialist {
    id: string
    name: string,
    speciality: Array<string>
    rating: number
    image? :string
    ratingCount: number
    availableTime: Array<Date>
    comments: Array<IComment>
}

export interface IComment {
    id: string
    createdAt: Date
    text: string
    rating: number
    addedBy: string
}
