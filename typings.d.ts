export interface Post {
    _id : string;
    _createAt : string;
    title : string; 
    author: {
        name: string;
        image: string;
    },
    comments: Comment[],
    description : string;
    mainImage: {
        asset: {
            url: string;
        };
    },
    slug : {
        current: string;
    };
    body: [object];
};

export interface Comment {
    approved: boolean;
    comment: string;
    email: string;
    name: string;
    post: {
        _type: string;
        _ref: string;
    };
    _createAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updateAt: string;
}