require 'pry'

# The Node class is only for internal use
# by the SinglyLinkedList class

class SinglyLinkedList

  attr_accessor :head

  def initialize( value )
    # Create a new instance of the Node class and
    # pass this constructor's argument down to it;
    # finally, save the node object it returns as
    # the head of our new list
    @head = Node.new ( value )

  end

  # Add a new node to the start of the list
  def prepend( value )
    new_node = Node.new value

    # Whatever node was at the start of the list, it
    # is now the 'next' node for our newly created node
    new_node.next = @head

    # The new head of the list is set to be the new
    # node that we just created
    @head = new_node
  end #prepend

  # Add a new node to the end of the list
  def append( value )

    # Find the last node in this list
    # i.e. keep looking at the next node
    # until the next node is 'nil'
    node = @head
    while node.next
      node = node.next
      # kind of like incrementing the loop counter
    end

    # puts "End of loop:"
    # p node

    node.next = Node.new value
  end # append

  # Return the last node in this list
  def last
    node = @head
    while node.next
      node = node.next
    end
    node
  end # last

  # Ruby will look for the 'to_s' method on any
  # object you try to print using 'puts', and will
  # run the method to get a printable string. In this
  # way you can provide a clear output for your custom
  # objects with weird internal structures.
  def to_s
    output = ''
    node = @head
    while node.next
      output += node.value + ', '
      node = node.next
    end
    output += node.value  # last entry without dangling comma
    output  # return the final string
  end


  # HOMEWORK!
  # Implement the following methods:

  def insert_after( node, value )
    # Find the specified node, and add a new node
    # with the given value between that found node
    # and the next
    node = find node
    node_after = node.next
    node_inserted = Node.new value
    node.next = node_inserted
    node_inserted.next = node_after
    node_inserted
  end

  def find( needle )
    # Return the node whose value == needle
    node = @head
    while node
      return node if node.value == needle
      node = node.next
    end
    node = -1
  end

  def at_index( index )
    # Return the node at the specified index
    # AKA array indexing!
    return @head if index.to_i == 0
    node = @head
    index.to_i.times do
      node = node.next
    end
    node ? node : -1
  end

  def reverse
    # return a reversed version of the list
    node = @head
    new_list = SinglyLinkedList.new @head.to_s
    node = node.next
    while node
      new_list.prepend node.value
      node = node.next
    end
    new_list
  end

  def reverse!
    # change self to be the reversed list (destructive)
    # node = @head
    # count = 0
    # while node
    #   count += 1
    #   node_previous = node
    #   node_next = node.next
    #   if node_next
    #     copy = node_next.next
    #     node_next.next = node_previous
    #     node_next = @head
    #   end
    #   puts "........... #{node_previous}, #{node_next}, #{copy}"
    #   node = node_next.next if node_next.next
    #   break if count == 4
    # end
    # node
  end

  def shift
    # remove the first item and return it
    # (destructive, i.e. changes the list)
    node = @head
    @head = node.next
    node
  end

  # Bonus challenges:

  def each
    # Needs to take a block!
    # Google 'yield'

    # THEN: can you rewrite the above methods in terms
    # of .each ?
  end

  def map
    # As above but applies block to each value
    # returns an array of transformed values
  end

  def inject
    # aka reduce
  end



  class Node

    # getter and setter methods for these instance var
    attr_accessor :value, :next

    def initialize( value )
      @value = value
      @next = nil
    end

    def to_s
      @value
    end


  end # Node

end # SinglyLinkedList

l = SinglyLinkedList.new 'Groucho'
l.append 'Harpo'
l.append 'Chico'
puts "append Harpo & Chico: #{l}"
puts l.last

f = l.find 'Harpo'
puts "find Harpo: #{f}"

l.insert_after 'Harpo', 'Rufus'
puts "insert Rufus after Harpo: #{l}"

a = l.at_index 3
puts "who is at index 3? #{a}"

r = l.reverse
puts "reverse linked list: #{r}"

s = l.shift
puts "shift: #{s}"
puts "shift list: #{s}"

# puts "destructive reverse list: #{l.reverse!}"

binding.pry
puts "Done."
