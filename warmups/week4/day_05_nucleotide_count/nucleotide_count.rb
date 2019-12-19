




def count_nucleotides dna

    bases_count = {
        'A' => 0,
        'C' => 0,
        'T' => 0,
        'G' => 0
    }

    dna.each_char do |base|

        if bases_count.key? base 
            bases_count[ base ] += 1
        else  
            puts " #{base} is not a valid nucleotide "
        end
    end

    bases_count.each do |key, val|
        puts "#{key}: #{val}"
    end

end

count_nucleotides "AGCTTTTXCATTCTGACTGCAACMGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"






