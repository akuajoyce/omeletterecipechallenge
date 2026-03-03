import './App.css'
import image from'./assets/images/image-omelette.jpeg'

function App() {

  return (
    <>
     <div className='min-h-screen bg-rose-50 flex justify-center py-6 px-4'>
      <section className='bg-white max-w-2xl w-full p-6 rounded-2xl shadow '>
        <img  className='w-full h-60 object-cover rounded-xl'
         src={image} 
         alt="omelette" 
         loading='lazy' />
        <h3 className='mt-4 text-2xl font-serif font-bold text-gray-800'>Simple Omelette Recipe</h3>
        <p className='mt-4 text-gray-500  text-[15px] leading-6 font-normal '>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese,
        vegetables, or meat.
        </p> 
        
        <div className='bg-rose-50 mt-6 p-5 rounded-lg'>
          <h2 className='text-rose-800 font-semibold'>Preparation Time </h2>
          <ul className='list-disc list-inside marker:text-[hsl(332,51%,32%)]'>
            <li><span className='font-semibold'>
              Total </span> 
            : Aproximately 10 minutes
            </li>
            <li><span className='font-semibold'>
              Preparation</span>
             : 5 minutes 
             </li>
            <li><span className='font-semibold'>
              Cooking</span> 
              : 5 minutes
            </li>
          </ul>
        </div>

        <section className='mt-6' >
          <h2 className='text-2xl  text-[hsl(14,45%,36%)]
           '>Ingredients </h2>

          <ul className='mt-4 list-disc list-inside marker:text-[hsl(14,45%,36%)]'>
           <li>2-3 large eggs</li>
           <li>Salt to taste</li>
           <li>Pepper, to taste </li>
           <li>1 tablespoon of butter or oil</li>
           <li>optional fillings, cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
        </section>

        <hr className="border-[hsl(30,18%,87%)] my-6" />

        
        <section>
          <h2 className='text-2xl  text-[hsl(14,45%,36%)]'>Instructions</h2>
          <p>1. Beat the eggs: In a bowl, beat the eggs with pinch salt and pepper until they are well mixed.You can add a tablespoon of water or milk for a flutter texture.</p>


        <p>2. Heat the pan: Place a non-stick fryng pan over medium heat and add butter or oil.</p>

        <p>3. Cook the omellete: Once the butter is melted and bubbling,pour in the eggs.Tilt the pan to ensure the eggs evenly wat the surface</p>

        <p>4. Add the fillings(optional): When the eggs brgin to set at the edges but are still slightly runny in the middle,sprinkle your chosen fillings over one half of the omelette</p>

        <p>Fold and serve : As the omelette continues to cook, carefully lift one edge  and fold it over tje fillings.Let it cook for anothe minute,then slide it onto a plate.</p>

          <p>Enjoy: Serve hot with additional salt and pepper kif needed.</p>
        </section>

          <p>Nutrition</p>
          <p>The table below shows nutritional values per serving without the additional fillings.</p>

          <p> Colories     277kcal</p>
          <p>Carbs          0g</p>
           <p>Protein       2og</p>
           <p>Fat           22g</p>

          
        

      </section>
     </div>
    </>
  )
}

export default App
