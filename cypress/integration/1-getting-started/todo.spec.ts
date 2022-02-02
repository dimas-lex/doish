/// <reference types="cypress" />

import dayjs from "dayjs";
import { type } from "os";
import { TTask } from "../../../src/features/task/taskSlice";


describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://lively-beach-00cc3e203.1.azurestaticapps.net/')
  })

  it('displays 0 todo items by default', () => {
    cy.get('.cy-task-list').should('be.visible');
    cy.get('.cy-task-list__no-items').should('be.visible').should('have.length', 1)

    cy.get('.cy-task-list__no-items').should('have.text', 'No tasks defined');
  })


  it('can add new todo items', () => {
    const newItem: TTask = {
      id: "1",
      title: "Task Title",
      description: "Some description",
      dueDate: dayjs().add(5, 'day').format('YYYY-MM-DD'),
      isDone: false,
      isPostpone: false
    };

    cy.get('.cy-add-task ').click();

    cy.get('.cy-dialog-box__title')
      .should('be.visible')
      .should('contain', 'New TO DO')

    cy.get('.cy-task__title')
      .clear()
      .type(newItem.title);

    cy.get('.cy-task__description')
      .clear()
      .type(newItem.description || '');

    cy.get('#task-dueDate')
      .clear()
      .type(newItem.dueDate || '');

    cy.get('.cy-task__submit').click();
    cy.get('.cy-dialog-box').should('not.exist');


    cy.get('.cy-task-list__item').should('be.visible').should('have.length', 1);


    cy.get('.cy-task-list__item').first()
    .within(() => {
      cy.get('.cy-task-item__title').should('contain.text', newItem.title);
      cy.get('.cy-task-item__description').should('contain.text', newItem.description);
      cy.get('.cy-task-item__due-date').should('contain.text', dayjs(newItem.dueDate).format('DD MMM YYYY'));
      cy.get('.cy-task-item__postpone').should('be.not.checked')
    });
  })

  it('can add second postponed todo items', () => {
    const newItem = {
      id: "1",
      title: "Task Title",
      isDone: false,
      isPostpone: true
    };

    cy.get('.cy-add-task ').click();

    cy.get('.cy-dialog-box__title')
      .should('be.visible')
      .should('contain', 'New TO DO')

      cy.get('.cy-task__title')
      .clear()
      .type(newItem.title);
      cy.get('.cy-task__is-postpone input')
        .check()

    cy.get('.cy-task__submit').click();
    cy.get('.cy-dialog-box').should('not.exist');


    cy.get('.cy-task-list__item').should('be.visible').should('have.length', 1);


    cy.get('.cy-task-list__item').first()
    .within(() => {
      cy.get('.cy-task-item__title').should('contain.text', newItem.title);
      cy.get('.cy-task-item__postpone').should('be.checked')
    });
  })
})
