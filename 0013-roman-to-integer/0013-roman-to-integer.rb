ROM_NUM = {
    "I" => 1,
    "V" => 5,
    "X" => 10,
    "L" => 50,
    "C" => 100,
    "D" => 500,
    "M" => 1000
}

def roman_to_int(s) 
    res = 0

    s.chars.each_with_index do |rom, i|
        if ROM_NUM[s[i+1]] && ROM_NUM[rom] < ROM_NUM[s[i+1]] 
            res += ROM_NUM[s[i+1]] - ROM_NUM[rom]
        else
            next if ROM_NUM[rom] > ROM_NUM[s[i-1]] && i != 0
            res += ROM_NUM[rom]
        end
    end

    res
    
end

