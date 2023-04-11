#!/usr/bin/python3
"""
file: base.py
Desc: Base model which will be shared among other models
Authors: Gizachew Bayness, Tesfay Teshome, Helina Gebryes, Bruk Gelelcha
Date Created: April 07 2023
"""
from flask import Flask
from flask import Blueprint, request, render_template, flash, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, logout_user, current_user, login_required
