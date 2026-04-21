package back.entity;


import jakarta.annotation.Nullable;

public record Utilisateur(Integer id, @Nullable String identifiant, @Nullable String password, @Nullable String adresseMail) {
}
