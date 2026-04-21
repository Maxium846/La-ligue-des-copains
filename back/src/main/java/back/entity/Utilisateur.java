package back.entity;


import jakarta.annotation.Nullable;

public record Utilisateur ( Integer id, @Nullable String name, @Nullable String password, @Nullable String adresseMail){



}
