package com.todo.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "todos")
public class Todo {

    private int id;
    private String task;
    private Enum priority;


    public Todo() {

    }
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    @Column(name = "task", nullable = false)
    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }
    @Column(name = "priority", nullable = false)
    public Enum getPriority() {
        return priority;
    }

    public void setPriority(Enum priority) {
        this.priority = priority;
    }
}
