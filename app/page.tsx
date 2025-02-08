import ChatHeader from '@/components/ChatHeader';
import { Button } from '@/components/ui/button';
import { supabaseBrowser } from '@/lib/supabase/browser';
import { SupabaseClient } from '@supabase/supabase-js';
import React from 'react';

async function HomePage() {
  const supabase = supabaseBrowser();
  const { data } = await supabase.auth.getSession();

  return (
    <div className='max-w-3xl mx-auto md:py-10 h-screen'>
      <div className='h-full border rounded-md'>
        <ChatHeader user={data.session?.user} />
      </div>
    </div>
  );
}

export default HomePage;
