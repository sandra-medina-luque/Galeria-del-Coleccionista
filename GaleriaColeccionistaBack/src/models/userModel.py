class User():
    def __init__(self, id_user, user_name, password, user_type) -> None:
       self.id_user=id_user
       self.user_name=user_name
       self.password=password
       self.user_type=user_type

    @classmethod
    def convert_from_BD(cls, row):
        return cls(row[0], row[1], row[2], row[3])         
