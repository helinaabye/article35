#!/usr/bin/env python3
"""
File: encrypt_password.py
Desc: This module contains python code related to encrypting password
      using bcrypt.
Author: ....
Date Created: Apr 21 2023
"""
import bcrypt


def hash_password(password: str) -> bytes:
    """ Takes in string arg, converts to unicode
    Returns salted, hashed pswd as bytestring
    """
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())


def is_valid(hashed_password: bytes, password: str) -> bool:
    """ Checks if hashed and unhashed pswds are same
    Returns bool
    """
    return bcrypt.checkpw(password.encode('utf-8'), hashed_password)
