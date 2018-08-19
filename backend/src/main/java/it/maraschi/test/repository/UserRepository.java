package it.maraschi.test.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import it.maraschi.test.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
