class CreateBasketballs < ActiveRecord::Migration[7.0]
  def change
    create_table :basketballs do |t|
      t.string :team
      t.string :coach

      t.timestamps
    end
  end
end
