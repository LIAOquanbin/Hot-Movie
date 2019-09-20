<template>
  <div>
      <CatHeader name="CAT影院"/>
      <Cinema/>
      <CatFooter/>
  </div>
</template>
<script>
import CatHeader from "@/components/CatHeader/CatHeader";
import CatFooter from "@/components/CatFooter/CatFooter";
import Cinema from '@/views/cinema/Cinema'
export default {
    components:{
        CatHeader,
        CatFooter,
        Cinema
    }
};
</script>