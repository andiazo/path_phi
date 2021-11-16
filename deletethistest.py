if __name__=='__main__':
    print('You should delete this file')
    esto no es buen codigo python
    a = 5
    b = 6
    
    print('Hola mundo')
     print('Hola mundo')
    print('Hola mundo')
    print('Hola mundo')
    """Paso en el juego de la vida de Conway."""
    v = vecindario(b) # Se calcula el vecindario
    buffer_b = b.copy() # Hacemos una copia de la matriz
    for i in range(buffer_b.shape[0]):
        for j in range(buffer_b.shape[1]):
            if v[i, j] == 3 or (v[i, j] == 2 and buffer_b[i, j]):
                buffer_b[i, j] = 1
            else:
                buffer_b[i, j] = 0
    
    """Paso en el juego de la vida de Conway."""
    v = vecindario(b) # Se calcula el vecindario
    buffer_b = b.copy() # Hacemos una copia de la matriz
    for i in range(buffer_b.shape[0]):
        for j in range(buffer_b.shape[1]):
            if v[i, j] == 3 or (v[i, j] == 2 and buffer_b[i, j]):
                buffer_b[i, j] = 1
            else:
                buffer_b[i, j] = 0
    

def vecindario(b):
    """Array de células vivas en el vecindario."""
    vecindario = (
        np.roll(np.roll(b, 1, 1), 1, 0) + # Arriba-izquierda
        np.roll(b, 1, 0) + # Arriba
        np.roll(np.roll(b, -1, 1), 1, 0) + # Arriba-derecha
        np.roll(b, -1, 1) + # Derecha
        np.roll(np.roll(b, -1, 1), -1, 0) + # Abajo-derecha
        np.roll(b, -1, 0) + # Abajo
        np.roll(np.roll(b, 1, 1), -1, 0) + # Abajo-izquierda
        np.roll(b, 1, 1) # Izquierda
    )
    return vecindario

def paso(b):
    """Paso en el juego de la vida de Conway."""
    v = vecindario(b) # Se calcula el vecindario
    buffer_b = b.copy() # Hacemos una copia de la matriz
    for i in range(buffer_b.shape[0]):
        for j in range(buffer_b.shape[1]):
            if v[i, j] == 3 or (v[i, j] == 2 and buffer_b[i, j]):
                buffer_b[i, j] = 1
            else:
                buffer_b[i, j] = 0
    return buffer_b

def paso(b):
    """Paso en el juego de la vida de Conway."""
    v = vecindario(b) # Se calcula el vecindario
    buffer_b = b.copy() # Hacemos una copia de la matriz
    for i in range(buffer_b.shape[0]):
        for j in range(buffer_b.shape[1]):
            if v[i, j] == 3 or (v[i, j] == 2 and buffer_b[i, j]):
                buffer_b[i, j] = 1
            else:
                buffer_b[i, j] = 0
    return buffer_b