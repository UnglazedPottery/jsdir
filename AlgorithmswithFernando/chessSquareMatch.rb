#Fernando's soln

def chessboard_cell_color(cell1, cell2)
    letters = ('A'..'H').to_a
    colors = ['Black', 'White','Black', 'White','Black', 'White','Black', 'White']
    arr_cells = []
    arr_colors = []
    hash = {}
    for i in 1..8
        for x in letters
            arr_cells << x + i.to_s
        end
        for x in 0..7
            arr_colors << colors[x]
        end
        colors = colors.reverse
    end
    hash = Hash[arr_cells.zip arr_colors]
    if hash[cell1] == hash[cell2]
        return true
    else
        return false
    end
end
p chessboard_cell_color("A1","C3") #true
p chessboard_cell_color("A1","H3") #false
p chessboard_cell_color("A1","A2") #false