export interface ChannelMods {
    nick: string
}
export interface ChannelFollowers {
    nick: string
}
export interface ChannelSubscribers {
    nick: string
}
export interface ChannelUser {
    mods: [ChannelMods],
    followers: [ChannelFollowers],
    subscribers: [ChannelSubscribers],
}
export interface User {
    name: string,
    userName: string,
    nick: string,
    email: string,
    password: string,
    age: number,
    gender: string,
    profileImage: any,
    bannerImage: any,
    biography: string,
    channel: [ChannelUser]
}