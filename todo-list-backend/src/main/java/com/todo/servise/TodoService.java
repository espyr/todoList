package com.todo.servise;
import java.util.List;
import com.todo.model.Todo;

public interface TodoService {
    List<Todo> listar();
    Todo findOne(long id);
    Todo delete(long id);
}
