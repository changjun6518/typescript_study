{
    type ToDo = {
        title: string,
        description: string;
        label:string,
        priority: 'high' | 'low',
    };

    function updateToDo(todo: ToDo, fieldToUpdate: Partial<ToDo>):ToDo{
        return {...todo, ...fieldToUpdate};
    }

    const todo: ToDo = {
        title: 'cj',
        description: 'asdasdasd',
        label: '123',
        priority: 'high',
    };

    const result :ToDo = updateToDo(todo, {priority:'low'});
    console.log(result);

}