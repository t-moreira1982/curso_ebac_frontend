$(document).ready(function() {
	// seleciona os elementos HTML
	var todoForm = $('#todo-form');
	var todoInput = $('#todo');
	var todoList = $('#todo-list');

	// cria um array para armazenar as tarefas
	var todos = [];

	
	function addTodo() {
		var todoText = todoInput.val();
		todos.push(todoText);
		renderTodos();
		todoInput.val('');
	}

	function renderTodos() {
		todoList.empty();
		for (var i = 0; i < todos.length; i++) {
			var todoItem = $('<li>').text(todos[i]);
			todoList.append(todoItem);
			todoItem.click(function() {
				$(this).toggleClass('completed');
			});
		}
	}

	// adiciona um evento de submit no formulário
	todoForm.submit(function(e) {
		e.preventDefault();
		addTodo();
	});
});
