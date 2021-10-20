package com.todo.servise;

import com.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import com.todo.model.Todo;
@Service
public class TodoServiceImpl implements TodoService{

    @Autowired
    private TodoRepository repository;
    @Override
    public List<Todo> listar() {
        return repository.findAll();
    }

    @Override
    public Todo listarId(int id) {
        return null;
    }

    @Override
    public Todo delete(int id) {
        return null;
    }
}
