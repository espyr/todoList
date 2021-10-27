package com.todo.controller;
import java.util.List;

import com.todo.model.Todo;
import com.todo.servise.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.todo.repository.TodoRepository;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"todos"})
public class TodoController {

    @Autowired
    private TodoRepository todoRepository;
@Autowired
    TodoService todoService;

    @GetMapping
    public List <Todo> findAll() {

        return todoService.listar();
    }

    @DeleteMapping("/{id}")
    public Todo deleteTodo(@PathVariable(value = "id") long id){
      return todoService.delete(id);
    }


}
