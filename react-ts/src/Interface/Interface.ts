export interface IComponentChild {
    children: JSX.Element | JSX.Element[]
}

export interface CardProp {
    _id: string
    title: string
    titlePost: string
    img: string
    type: string
    author: string
    ratingAuthor: number
    totalRating: number
    rating: Map<string, number>
    like: string[]
    comments: string[]
    text: string
}

export interface justCard {
    title: string
    titlePost: string
    img: string
    type: string
    author: string
    ratingAuthor: number
    text: string
}

export interface CommentData {
    text: string;
}