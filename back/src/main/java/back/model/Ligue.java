package back.model;

import jakarta.persistence.*;

@Entity
@Table(name = "ligue")
public class Ligue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "nom")
    private String nom;

    @Column(name = "classement")
    private String classement;
}

