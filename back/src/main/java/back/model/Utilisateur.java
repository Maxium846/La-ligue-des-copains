package back.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "utilisateur", uniqueConstraints = @UniqueConstraint(columnNames = {"identifiant", "adresse_mail"}))
@Data
public class Utilisateur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "identifiant")
    private String identifiant;

    @Column(name = "adresse_mail")
    private String adresseMail;

    @Column(name = "password")
    private String password;
}

