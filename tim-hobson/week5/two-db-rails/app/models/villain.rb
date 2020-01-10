class Villain < ApplicationRecord
  belongs_to :superhero, optional: true
end
