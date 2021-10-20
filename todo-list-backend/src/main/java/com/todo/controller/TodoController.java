package com.todo.controller;
import java.util.List;

import com.todo.model.Todo;
import com.todo.servise.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.todo.repository.TodoRepository;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/todos"})
public class TodoController {

    @Autowired
    private TodoRepository todoRepository;
@Autowired
    TodoService todoService;

    @GetMapping("/todos")
    public List <Todo> findAll() {

        return todoService.listar();
    }

//    @DeleteMapping("/todos/{id}")
//    public Map < String, Boolean > deleteTodo(@PathVariable(value = "id") Integer todoId)
//            throws ResourceNotFoundException {
//        Todo todo = todoRepository.findById(todoId)
//                .orElseThrow(() -> new ResourceNotFoundException("Todo not found for this id :: " + todoId));
//
//        todoRepository.delete(todo);
//        Map < String, Boolean > response = new HashMap < > ();
//        response.put("deleted", Boolean.TRUE);
//        return response;
//    }
//}

}
