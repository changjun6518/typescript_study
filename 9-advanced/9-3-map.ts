{
    type Video = {
        title: string,
        author: string,
    };

    // [1,2].map(item =? item* item) =>> [1,4]
    type Optional<T> = {
        [P in keyof T] ?: T[P] // for ... in
    };
    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P]
    };

    type VideoOptional = Optional<Video>;

    const VO:VideoOptional = {
        title:'chang',
    }


    type Animal = {
        name:string,
        age:number,
    }

    const animal:Optional<Animal> = {
        name:"monkey",
    }
    
    // type VideoOptional = {
    //     title ?:string,
    //     author?:string,
    // };

    // type videoReadOnly = {
    //     readonly title :string,
    //     readonly author:string,
    // }
}